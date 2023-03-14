function getFormData(form) {
    let obj = {};

    const formData = new FormData(form.current);

    for(const [key, value] of formData.entries()) {
        obj = {
            ...obj, 
            [key]: value
        };
    }

    return obj;
}
export default getFormData;