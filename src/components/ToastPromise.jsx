import React from 'react'
//Library
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');
const ToastPromise = (props) => {
  <div>
    <button onClick={notify}>{props.text}</button>
    <Toaster />
  </div>
}

export default ToastPromise