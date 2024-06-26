
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
        <div className="flex flex-col mt-[120px] justify-center w-[340px] rounded-lg border-2 border-neutral-300 bg-white">
            <div>
                <img src={imageSrc} className="rounded-t-md" alt="Calm living room with window" />
                <div className="px-4 pt-5 pb-2">
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-4 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-200">{category}</span>
                </div>
                <div className="text-lg font-semibold text-neutral-900 px-4 py-2">
                    <p>{articleTitle}</p>
                </div>
                <div className="line-clamp-2 text-base text-neutral-600 px-4">
                    <p>{subtitle}</p>
                </div>
                <div className="flex flex-row justify-start items-center p-4">
                    <a className="font-medium text-base text-indigo-700">{cta}</a>
                    <ArrowIcon />
                </div>
            </div>
        </div>
    )
}

export default BlogCard;