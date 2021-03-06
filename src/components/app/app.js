import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AuthState, AuthProvider } from '../auth'
import store from '../../store'

import Layout from '../layout'

export default class App extends Component {

    render() {

        return (
            <Provider store={store}>
                    <AuthProvider value={AuthState}>
                        <BrowserRouter basename="">
                            <Layout />
                        </BrowserRouter>
                    </AuthProvider>
            </Provider>
        )
    }
}