import { Slot } from '@radix-ui/react-slot'
import{clsx} from 'clsx' ; 
import {ReactNode} from 'react'

export interface ButtonProps{
   
    children: ReactNode;
    asChild: boolean
   
}
export function Button({  children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return(
        <Comp 
        className={clsx(
            'py-4 px-3 bg-cyano rounded font-bold text-white text-sm w-full transition-colors focus:ring-2 ring-white  hover:bg-rover',{
               
            
            
                
            }
            )} >{children }
            </Comp>
    ) 
}