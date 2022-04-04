export const convertTime = (time: number) => {
    if (time < 10) {
        return `0${time}s`;
    }

    return `${time}s`
}
