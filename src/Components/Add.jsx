import { Button } from '@cred/neopop-web/lib/components';

const Page = () => {
    return (
        <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="dark"
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            Add
        </Button>
    );
};

export default Page;