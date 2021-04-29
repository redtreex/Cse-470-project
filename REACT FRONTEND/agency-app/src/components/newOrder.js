import React from 'react'

export default function newOrder() {
    return (
        <div>
            <div>
                <label>Select Order Type:</label>
                <select id="order-selection">
                    <option value="0">Mobile Application</option>
                    <option value="1">Web Application</option>
                    <option value="2">Desktop Application</option>
                    <option value="3">Full System</option>
                </select>
                <br/>
                <br/>
            </div>

            <div>
                <label>Name</label>
                <input type="text" />
                <br /><br />
            </div>

            <div>
                <label>Description:</label>
                <input type="text" />
                <br /><br />
            </div>
            <div>
                <button>Get It Done</button>
            </div>
        </div>
    )
}
