import { useUsernameContext } from "@/contexts/UsernameContext";
const About = () => {

    const { username, changeUsername } = useUsernameContext();
    console.log(username);
    return (
        <div>
            About Page
        </div>
    )
}

export default About;