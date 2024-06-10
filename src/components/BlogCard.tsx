import ArrowIcon from './ArrowIcon';

interface BlogCardProps {
    category: string;
    articleTitle: string;
    subtitle: string;
    cta: string;
    imageSrc: string;
};

const BlogCard = ({ category, articleTitle, subtitle, cta, imageSrc }: BlogCardProps) => {
    return (
        <div className="flex flex-col justify-center items-center w-72 space-y-1.5 bg-white">
            <div>
                <img src={imageSrc} />
                <div className="p-3">
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800">{category}</span>
                </div>
                <div className="text-lg px-3">
                    <p>{articleTitle}</p>
                </div>
                <div className="text-base text-neutral-600 px-3">
                    <p>{subtitle}</p>
                </div>
                <div className="flex flex-row justify-start items-center p-3">
                    <a className="text-indigo-700">{cta}</a>
                    <ArrowIcon />
                </div>
            </div>
        </div>
    )
}

export default BlogCard;