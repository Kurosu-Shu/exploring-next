import React from 'react';
import { useRouter } from 'next/router';

const BlogPostById = () => {
    const router = useRouter();

    const { id } = router.query;
    return (
        <div>
            this is blog post Id {id}
        </div>
    );
};

export default BlogPostById;