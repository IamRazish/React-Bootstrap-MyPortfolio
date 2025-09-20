import { Toast, ToastContainer } from 'react-bootstrap'
import { useState } from 'react'


export default function GlobalToaster() {
const [show, setShow] = useState(false)
const [msg, setMsg] = useState('')
;(window as any).toast = (m: string) => { setMsg(m); setShow(true) }
return (
<ToastContainer position="bottom-end" className="p-3">
<Toast onClose={() => setShow(false)} show={show} delay={2500} autohide role="status" aria-live="polite">
<Toast.Body>{msg}</Toast.Body>
</Toast>
</ToastContainer>
)
}