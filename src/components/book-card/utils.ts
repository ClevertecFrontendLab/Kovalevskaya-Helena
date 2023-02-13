export const convertDate = (bookingDate:string) => {
    const date = new Date (bookingDate);

    return date.toLocaleDateString(undefined,{ day: 'numeric', month: 'numeric' })

}
