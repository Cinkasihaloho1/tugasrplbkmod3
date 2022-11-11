import { useEffect, useState } from "react"

export default function LeftChat(props){
    const bubble = {
        padding: '10px',
        borderRadius: '3px 5px 3px 5px',
        backgroundColor: 'white',
        width: 'fit-content',
        height: 'fit-content',
    }

    const [message, setMessage] = useState(props.message)

    useEffect(() => {
      if(props.message.includes('fuck')){
        alert ('Kata Kasar Tidak Diperbolehkan')
      }

    },[message])


    return (
        <div style={bubble}>
            {message}
        </div>
    )
}