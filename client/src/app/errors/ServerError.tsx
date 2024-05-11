import React from 'react'
import { Container, Divider, Paper, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

const ServerError = () => {
  const { state } = useLocation()

  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography
            gutterBottom
            variant='h3'
            color='secondary'
          >
            {state.error.title}
          </Typography>
          <Divider />
          <Typography
            gutterBottom
            variant='h6'
            color='secondary'
          >
            {state.error.detail || 'Internal server error'}
          </Typography>
        </>
      ) : (
        <Typography
          gutterBottom
          variant='h5'
        >
          Server Error
        </Typography>
      )}
    </Container>
  )
}

export default ServerError
