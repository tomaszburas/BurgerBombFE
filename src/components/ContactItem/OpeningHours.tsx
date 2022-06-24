interface Props {
    monThu: string;
    friSat: string;
    sun: string;
}

export const OpeningHours = ({ monThu, friSat, sun }: Props) => {
    return (
        <>
            <p>[Mon-Thu] {monThu}</p>
            <p>[Fri-Sat] {friSat}</p>
            <p>[Sun] {sun}</p>
        </>
    );
};
