import { AlertProps, Alert, AlertIcon } from '@chakra-ui/react'

export const AlertInfo = (props: AlertProps) => (
  <Alert status="info" rounded="md" {...props}>
    <AlertIcon />
    {props.children}
  </Alert>
)
