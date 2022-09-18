

let sample_votes = {"Vote1":{0:[1000, 2000, 3000]}, "Vote2":{0:[70, 100, 300]}}

console.log(sample_votes)


function define_square_area(proposition) {
    let proposition_dict = sample_votes[proposition]
    let contributions = Object.values(proposition_dict)[0]
    total_contributions = 0 
    for (let contribution_idx = 0; contribution_idx <= contributions.length; contribution_idx++) {
        const contribution = contributions[contribution_idx]
        if (contribution === undefined) {
            continue
        } else {
            const square_root = Math.sqrt(contribution)
            total_contributions += square_root

        }
        
    }
    const square_area = total_contributions ** 2
    sample_votes[proposition] = {[square_area]:contributions}
    console.log(`Square Area for ${proposition} has been updated`)
    console.log(sample_votes)
    
}

define_square_area("Vote1")

function find_info_area() {
    var support_areas_lst = []
    var sum_of_areas = 0 
    const sample_votes_keys = Object.keys(sample_votes)
    
    for (let key_idx =0; key_idx <= sample_votes_keys.length; key_idx++) {
        key = sample_votes_keys[key_idx]
        if (key === undefined) {
            continue
        } else {
            const relative_dictionary = sample_votes[key]
            const relative_dict_keys = Object.keys(relative_dictionary)[0]
            support_areas_lst.push(parseInt(relative_dict_keys))
            sum_of_areas += parseInt(relative_dict_keys)
        
        }

        

    }

    console.log(support_areas_lst)
    return [Math.max(...support_areas_lst), sum_of_areas]
}




function support_area_tax(proposition) {
    const current_support_area = Object.keys(sample_votes[proposition])[0]
    const minimum_tax = 1000 
    const relative_support_information = find_info_area()
    const largest_support = relative_support_information[0]
    console.log(relative_support_information)
    const sum_of_areas = relative_support_information[1]
    //console.log(sum_of_areas)

    const difference = parseInt(current_support_area) - minimum_tax
    console.log(largest_support)
    const quotient = difference/parseInt(largest_support)

    const maximum  = Math.max(quotient,  0)
    const product = maximum * (parseInt(current_support_area) / sum_of_areas)
    return product
}

support_area_tax("Vote1")

function support_area_increase(proposition) {
    const proposition_dict = sample_votes[proposition]
    const relative_support_area = Object.keys(proposition_dict)[0]
    const relative_votes = Object.values(proposition_dict)[0]
    const relative_tax = support_area_tax(proposition)
    const inverse_tax = (1 - relative_tax) ** 2
    const new_support_difference = relative_support_area * inverse_tax
    sample_votes[proposition] = {[new_support_difference]: relative_votes}
    console.log(sample_votes)
}

support_area_increase("Vote1")



