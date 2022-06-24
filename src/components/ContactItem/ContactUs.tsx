interface Props {
    phone: string;
    mail: string;
}

export const ContactUs = ({ phone, mail }: Props) => {
    return (
        <>
            <p>{phone}</p>
            <p>{mail}</p>
        </>
    );
};
