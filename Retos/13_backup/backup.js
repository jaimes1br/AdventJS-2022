const lastBackup = 1546300800
const changes = [
        [2, 1546300800],
        [3, 1546301100],
        [1, 1546300800],
        [1, 1546300900],
        [1, 1546301000]
    ]

// console.log(getFilesToBackup(lastBackup, changes));
/**
 * 
 * @param {number} lastBackup timestamp since last backup
 * @param {Array[number]} changes modification of each file with its timestamp
 * @returns 
 */
function getFilesToBackup(lastBackup, changes) {   
    let files = changes.filter(f => f[1] > lastBackup).map(e => e[0])
    return [...new Set(files)].sort((a,b) => a - b)
}

module.exports = getFilesToBackup