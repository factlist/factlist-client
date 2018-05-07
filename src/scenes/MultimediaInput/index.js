import React, { Component, Fragment } from 'react'
import config from 'config'
import axios from 'axios'
import Container from './Container'
import Editor from './Editor'
import EmbedPreview from './EmbedPreview'
import Seperator from './Seperator'
import Label from './Label'

class MultimediaInput extends Component {
  state = {
    urls: [],
    embeds: {},
  }

  onUrls = this.onUrls.bind(this)
  getEmbed = this.getEmbed.bind(this)

  onUrls(urls) {
    this.setState({ urls })
    urls.forEach(url => this.getEmbed(url))
  }

  getEmbed(url) {
    const embeds = this.state.embeds
    const embed = embeds[url]

    if (embed || (embed && embed.requesting === true)) {
      return null
    }

    embeds[url] = { requesting: true, data: null }
    this.setState({ embeds })

    this.embedRequest(url).then(data => {
      embeds[url] = {
        requesting: false,
        error: data ? false : true,
        data,
      }

      this.setState({ embeds })
    })
  }

  embedRequest(url) {
    return new Promise(resolve => {
      axios
        .get(`${config.API_ENDPOINT}/embed/?link=${url}`)
        .then(response => response.data)
        .then(data => resolve(data))
        .catch(() => resolve(null))
    })
  }

  render() {
    let { embeds, urls } = this.state
    embeds = urls
      .map(url => embeds[url])
      .filter(embed => typeof embed !== 'undefined')

    return (
      <Container>
        <Editor onLinks={this.onUrls} />

        <Seperator />

        {embeds.length > 0 && (
          <Fragment>
            <Label>Links:</Label>
            <EmbedPreview embeds={embeds} />
          </Fragment>
        )}

        <Label>Attachments:</Label>
      </Container>
    )
  }
}

export default MultimediaInput
