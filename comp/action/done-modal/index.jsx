"use client";
import React, { useEffect, useState } from "react";
import Button from "../../button";
import Modal from "../../modal";
export default function ({ children, state, buttonText, hideButton }) {
    const [open, setOpen] = useState(true);
    const [time, setTime] = useState(0);
    buttonText = buttonText || "확인";
    useEffect(() => {
        if (!state)
            return;
        if (!state.response)
            return;
        if (time === state.response.time)
            return;
        setOpen(true);
        setTime(state.response.time);
    }, [state]);
    if (!state)
        return null;
    if (!state.response)
        return null;
    if (!children)
        return null;
    return (<Modal.Simple disableBackdrop disableCloseButton open={open} onClose={() => setOpen(false)}>
			{children}
			{!hideButton && (<Button.Basic className="mt-3 w-full" onClick={() => setOpen(false)}>
					{buttonText}
				</Button.Basic>)}
		</Modal.Simple>);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanN4Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUdiLE9BQU8sS0FBSyxFQUFFLEVBQVksU0FBUyxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUM1RCxPQUFPLE1BQU0sTUFBTSxjQUFjLENBQUM7QUFDbEMsT0FBTyxLQUFLLE1BQU0sYUFBYSxDQUFDO0FBZWhDLE1BQU0sQ0FBQyxPQUFPLFdBQWMsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQVc7SUFDOUUsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFcEMsVUFBVSxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUM7SUFFaEMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzVCLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFekMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVaLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDakMsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUUzQixPQUFPLENBQ04sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUNaLGVBQWUsQ0FDZixrQkFBa0IsQ0FDbEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ1gsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzlCO0dBQUEsQ0FBQyxRQUFRLENBQ1Q7R0FBQSxDQUFDLENBQUMsVUFBVSxJQUFJLENBQ2YsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNaLFNBQVMsQ0FBQyxhQUFhLENBQ3ZCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUM5QjtLQUFBLENBQUMsVUFBVSxDQUNaO0lBQUEsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQ2YsQ0FDRjtFQUFBLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUNmLENBQUM7QUFDSCxDQUFDIn0=