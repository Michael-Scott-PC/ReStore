import React, { useState } from 'react'
import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import agent from '../../app/api/agent'

const AboutPage = () => {
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const getValidationError = () => {
    agent.TestErrors.getValidationError().catch(error => {
      setValidationErrors(error)
    })
  }

  return (
    <Container>
      <Typography>Errors for testing purposes</Typography>
      <ButtonGroup fullWidth>
        <Button
          variant='contained'
          onClick={() =>
            agent.TestErrors.get400Error().catch(error => console.log(error))
          }
        >
          Test 400 error
        </Button>
        <Button
          variant='contained'
          onClick={() =>
            agent.TestErrors.get401Error().catch(error => console.log(error))
          }
        >
          Test 401 error
        </Button>
        <Button
          variant='contained'
          onClick={() =>
            agent.TestErrors.get404Error().catch(error => console.log(error))
          }
        >
          Test 404 error
        </Button>
        <Button
          variant='contained'
          onClick={() =>
            agent.TestErrors.get500Error().catch(error => console.log(error))
          }
        >
          Test 500 error
        </Button>
        <Button
          variant='contained'
          onClick={getValidationError}
        >
          Test Validation error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity='error'>
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map((error, i) => (
              <ListItem key={i}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  )
}

export default AboutPage
