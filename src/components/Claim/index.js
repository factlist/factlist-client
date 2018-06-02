import React from 'react'
import { Flex, Box } from 'grid-styled'
import Timeago from 'components/Timeago'
import Linkify from 'components/Linkify'
import Container from './Container'
import Status from './../Status'
import Title from './Title'
import Attachments from '../Attachments'

const Claim = ({ claim }) => (
  <Container>
    <Flex justify="space-between" align="center">
      <Box>
        <Status
          trueCount={claim.true_count}
          falseCount={claim.false_count}
          inConclusiveCount={claim.inconclusive_count} />
      </Box>
      <Box>
        <Timeago date={claim.created_at} />
      </Box>
    </Flex>

    <Flex column mt={20}>
      <Box>
        <Title>
          <Linkify>{claim.text}</Linkify>
        </Title>
        <Attachments
          links={claim.links}
          files={claim.files} />
      </Box>
    </Flex>
  </Container>
)

export default Claim
