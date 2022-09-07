
import {Container,Row, Button} from 'react-bootstrap'

import {HiRefresh } from 'react-icons/hi'




export const DraftModeMessage = (props) => {



    return (
        <div style={{

            position: 'absolute',
            top: '140px',
            left: '20px',
            backgroundColor: '#da4848',
            color: '#FFF',
            zIndex: '99999',
            padding: '15px',
            borderRadius: '5px',
            textAlign: 'center',
        }}>
           <div>
                    <Button variant="outline-light" style={{marginRight: 20}}
                        onClick={(e) => {
                            e.preventDefault()
                            window.localStorage.removeItem("isModeDraft")
                            window.localStorage.removeItem("id")
                            window.location.href = window.location.protocol + '//' + window.location.host + window.location.pathname;
                            return false;
                        }
                    }>Stop preview mode</Button>
              
                    <Button
                    onClick={props.getData}
                    style={{marginLeft: -10}}>
                      <HiRefresh />
                    </Button>
                
        </div>
        </div>
    )
}