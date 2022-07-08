interface Props {
    phone: string;
    email: string;
}

export const ContactUs = ({ phone, email }: Props) => {
    return (
        <>
            <p>{phone}</p>
            <p>{email}</p>
        </>
    );
};
