import CategoryItem from '../category-item/category-item.component'


function Directory({ categories }) {
    return (
        <div className="directory-container">
        {categories.map(({ id, title, imageUrl })=> <CategoryItem key={id} {...{title, imageUrl}}/>)}
       </div>
    )
}

export default Directory;