import BlogCard from '../components/BlogCard';

const data = {
    category: 'Interior',
    articleTitle: 'Top 5 Living Room Inspirations',
    subtitle: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
    cta: 'Read more',
    imageSrc: '/GFE-blog-card/livingroom.jpg'
};

export default function Page() {
    const { category, articleTitle, subtitle, cta, imageSrc } = data;
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-[#f9fafb] to-[#d2d6db]">
            <BlogCard
                category={category}
                articleTitle={articleTitle}
                subtitle={subtitle}
                cta={cta}
                imageSrc={imageSrc}
            />
        </div>
    )
  }