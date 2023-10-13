import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={`navbar fixed-top navbar-expand-lg bg-${this.props.mode === 'dark'?'dark':'light'} navbar-${this.props.mode === 'dark'?'dark':'light'}`}>
                    <div className='container-fluid'>
                        <Link className='navbar-brand' to='/'>News-Spots</Link>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/business' className='nav-link ' aria-current='page'>Business</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link ' aria-current='page' to='/entertainment'>Entertainment</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/general' className='nav-link ' aria-current='page'>General</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/health' className='nav-link ' aria-current='page'>Health</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/science' className='nav-link ' aria-current='page'>Science</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/sports' className='nav-link ' aria-current='page'>Sports</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/technology' className='nav-link' aria-current='page'>Technology</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="form-check form-switch" onClick={this.props.toggleMode}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                                <label className={`form-check-label text-${this.props.mode === 'dark'?'light':'dark'}`} htmlFor="flexSwitchCheckChecked">{this.props.mode === 'dark'?"Disable dark mode":"Enable dark mode"}</label>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
