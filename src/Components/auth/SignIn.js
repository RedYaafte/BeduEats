import React, {Component} from 'react';

class SignIn extends Component {
    render(){
        return(
            <form>
                <input type="text" placeholder="Usuario"/>
                <input type="text" placeholder="Contraseña"/>
                <button>SignIn</button>
            </form>
        )
    }
}