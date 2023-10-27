export const changeColorTypes = (type) => {
    let classText = 'mx-2 mt-2 border border-gray-300 text-white text-lg py-1 px-3 rounded-md'
    if(type === 'bug'){
        classText += ' bg-green-500 '
    }else if(type === 'poison') {
        classText += ' bg-purple-500 '
    }else if(type === 'water') {
        classText += ' bg-blue-300 '
    }else if(type === 'grass') {
        classText += ' bg-green-700 '
    }else if(type === 'fire') {
        classText += ' bg-orange-500 '
    }else if(type === 'flying') {
        classText += ' bg-pink-300 '
    }else {
        classText += ' bg-gray-500 '
    }
    return <div className={classText}> {type} </div>
}