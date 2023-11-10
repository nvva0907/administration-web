export default function Status({status}) {
    return (
        <div>
            {
                (() => {
                    if (status === 1) {
                        return (
                            <div className="bg-green-800 text-white rounded text-xs text-center w-20">
                                <p>Active</p>
                            </div>
                        )
                    } else if (status === 0) {
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