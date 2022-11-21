import { ButtonProps } from '@chaincodedev/decentraland-ui/dist/components/Button/Button'
import { Network } from '@dcl/schemas/dist/dapps/network'

export type Props = ButtonProps & {
  network: Network
}
