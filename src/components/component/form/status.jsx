export default function Status(props) {
    return (
        <div>
            {
                (() => {
                    if (props.status === 1) {
                        return (
                            <div className="bg-green-800 text-white rounded text-xs text-center w-20">
                                <p>Active</p>
                            </div>
                        )
                    } else if (props.status === 0) {
                        return (
                            <div className="bg-red-800 text-white rounded text-xs text-center w-20">
                                <p>InActive</p>
                            </div>
                        )
                    } else {
                        return '';
                    }
                })()
            }
        </div>
    )

}