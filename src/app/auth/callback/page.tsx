import React from 'react'
import {Loader} from "lucide-react";

function Page() {
    return (
        <div className="mt-20 w-full flex justify-center">
            <div className="flex flex-col items-center gap-2">
                <Loader className="size-10 animate-spin text-muted-foreground"/>
                <h3 className="text-xl font-bold">
                    Redirecting...
                </h3>

                <p>Please wait</p>
            </div>
        </div>
    )
}

export default Page
