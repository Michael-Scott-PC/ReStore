import { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import { Switch } from '@mui/material'

interface IHeaderProps {
  handleModeToggle: () => void
}
const Header: FC<IHeaderProps> = ({ handleModeToggle }) => {
  return (
    <AppBar
      position='static'
      sx={{ mb: 4 }}
    >
      <Toolbar>
        <Typography variant='h6'>RE-STORE</Typography>
        <Switch onChange={handleModeToggle} />
      </Toolbar>
    </AppBar>
  )
}

export default Header
