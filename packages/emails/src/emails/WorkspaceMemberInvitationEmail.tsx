import React, { ComponentProps } from 'react'
import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlSpacer,
} from '@faire/mjml-react'
import { render } from '@faire/mjml-react/utils/render'
import { HeroImage, Text, Button, Head } from '../components'
import { SendMailOptions } from 'nodemailer'
import { sendEmail } from '../sendEmail'
import { env } from '@typebot.io/env'

type WorkspaceMemberInvitationProps = {
  workspaceName: string
  url: string
  hostEmail: string
  guestEmail: string
}

export const WorkspaceMemberInvitation = ({
  workspaceName,
  url,
  hostEmail,
  guestEmail,
}: WorkspaceMemberInvitationProps) => (
  <Mjml>
    <Head />
    <MjmlBody width={600}>
      <MjmlSection padding="0">
        <MjmlColumn>
          <HeroImage src={`https://mininapi.chatbotconnect.com.br/typebot/Ateende.jpeg`} />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection padding="0 24px" cssClass="smooth">
        <MjmlColumn>
          <Text>
          Você foi convidado pelo Atennde para seu novo Bot.
          </Text>
          <Text>
            A partir de agora você verá este espaço de trabalho em seu painel 👍
          </Text>
          <Text>
          Certifique-se de fazer login como <i>{guestEmail}</i>.
          </Text>
          <MjmlSpacer height="24px" />
          <Button link={url}>Ir para o bot</Button>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
)

export const sendWorkspaceMemberInvitationEmail = ({
  to,
  ...props
}: Pick<SendMailOptions, 'to'> &
  ComponentProps<typeof WorkspaceMemberInvitation>) =>
  sendEmail({
    to,
    subject: "Você foi convidado por Ateende.Net 🤝",
    html: render(<WorkspaceMemberInvitation {...props} />).html,
  })
