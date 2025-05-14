export default function Purchase() {
    return (
        <div className="Purchase-container flex-container">
            <h2>Purchase Overview</h2>

            <div className="flex-item">
                <div className="purchase logo-container">
                    <img src="../src/assets/dashboard/Purchase/Purchase-bag.svg" alt="Purchase bag logo" />
                    <div className="text-div">
                        <strong>82</strong>
                        <p>Purchase</p>
                    </div>
                </div>
                <hr />

                <div className="Cost logo-container">
                    <img src="../src/assets/dashboard/Purchase/Cost.svg" alt="A Cost Logo" />
                    <div className="text-div">
                        <strong>₹ 13,573</strong>
                        <p>Cost</p>
                    </div>
                </div>
                <hr />

                <div className="Cancel logo-container">
                    <img src="../src/assets/dashboard/Purchase/Cancel.svg" alt="A cancel Logo" className="help" />
                    <div className="text-div">
                        <strong>5</strong>
                        <p>Cancel</p>
                    </div>
                </div>
                <hr />
                <div className="Return logo-container">
                    <img src="../src/assets/dashboard/Purchase/Profit.svg" alt="A profit logo" />
                    <div className="text-div">
                        <strong>₹17,432</strong>
                        <p className="last-child">Return</p>
                    </div>
                </div>
            </div>
        </div>
    )
}