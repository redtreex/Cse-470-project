import React from 'react'

export default function newOrder() {
    return (
        <div>
            <div>
                <label>Select Order Type:</label>
                <select id="order-selection">
                    <option value="mobileApp">Mobile Application</option>
                    <option value="webApp">Web Application</option>
                    <option value="deskApp">Desktop Application</option>
                    <option value="fullSystem">Full System</option>
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
                <label>Discount Code(optional):</label>
                <input type="text" />
                <br /><br />
            </div>

            <div>
                <button>Get It Done</button>
            </div>
        </div>
    )
}
