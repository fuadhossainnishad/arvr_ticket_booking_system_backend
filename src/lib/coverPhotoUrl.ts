export const coverPhotoHandle= (protocol:string,host:string | undefined,photoLocation:string|null):string | null=>{
    if(photoLocation){
        const baseUrl=`${protocol}://${host}/${photoLocation}`
        return baseUrl
    }
    return null
}