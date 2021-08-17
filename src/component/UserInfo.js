import React from "react"

class UserInfo extends React.Component {

    render() {
        let border = { border:"1px solid black", width: "50%"}
        

        return(
            <>
                
                <p style={border}>
                    <strong>name:</strong> {this.props.name}, <strong>email:</strong> {this.props.email}, <strong>website:</strong> {this.props.website}                    
                </p>

            </>
        )
    }

}

export default UserInfo