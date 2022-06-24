interface Props {
    street: string;
    number: string;
    zipCode: string;
    city: string;
}

export const VisitUs = ({ street, number, zipCode, city }: Props) => {
    return (
        <>
            <p>
                {street} {number}
            </p>
            <p>
                {zipCode} {city}
            </p>
        </>
    );
};
