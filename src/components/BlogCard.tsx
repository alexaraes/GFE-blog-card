
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
        <div className="flex flex-col justify-center items-center w-80 rounded-lg drop-shadow-lg bg-white">
            <div>
                <img src={imageSrc} className="rounded-t-lg" />
                <div className="px-4 pt-5 pb-2">
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-4 rounded-full text-xs font-medium bg-green-50 text-green-700 border-solid border-green-200">{category}</span>
                </div>
                <div className="text-lg font-semibold text-neutral-900 px-4 py-2">
                    <p>{articleTitle}</p>
                </div>
                <div className="text-base text-neutral-600 px-4">
                    <p>{subtitle}</p>
                </div>
                <div className="flex flex-row justify-start items-center p-4">
                    <a className="text-base text-indigo-700">{cta}</a>
                    <ArrowIcon />
                </div>
            </div>
        </div>
    )
}

export default BlogCard;