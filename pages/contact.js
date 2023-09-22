import { useRouter } from 'next/router';

const Contact = () => {
    const router = useRouter();
    return (
        <div>
            Contact Page

            <div>
                <button
                    className="px-2 py-3 bg-black text-white"
                    onClick={() => router.back()}>
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default Contact;