export const PENDING_STATUS="PENDING";
export const CONFIRMED_STATUS="CONFIRMED";
export const SHIPPED_STATUS="SHIPPED";
export const DELIVERED_STATUS="DELIVERED";

export const orderStatus =[
    {
        label: PENDING_STATUS,
        value: PENDING_STATUS,
        disabled:true,
    },
    {
        label: CONFIRMED_STATUS,
        value: CONFIRMED_STATUS,
        disabled:true,
    },
    {
        label: SHIPPED_STATUS,
        value: SHIPPED_STATUS,
        disabled:false,
    },
    {
        label: DELIVERED_STATUS,
        value: DELIVERED_STATUS,
        disabled:false,
    },
]