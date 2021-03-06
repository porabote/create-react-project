import React from 'react'

const {
    Provider : AuthProvider,
    Consumer: AuthConsumer
} = React.createContext()

export {
    AuthProvider,
    AuthConsumer
}