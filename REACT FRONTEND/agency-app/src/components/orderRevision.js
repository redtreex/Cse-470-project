import React from 'react'

export default function orderRevision() {
    return (
        <div>
            <div>
                <label>Order ID:</label>
                <input type="text" />
                <br /><br />
            </div>

            <div>
                <label>Description:</label>
                <input type="text" />
                <br /><br />
            </div>
            <div>
                <button>Send</button>
            </div>
        </div>
    )
}
