import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc, where } from "firebase/firestore";
import { db } from '../services/Firebase'

function compare(a, b) {

    const projectA = a.createdAt
    const projectB = b.createdAt

    let comparison = 0;
    if (projectA > projectB) {
        comparison = -1;
    } else if (projectA < projectB) {
        comparison = 1;
    }
    return comparison;
}

class PortfolioService {

    async getOne(uid) {
        try {
            const docSnap = await getDoc(doc(db, "projects", uid));
            return docSnap.data()
        }
        catch (error) {
            console.log(error)
        }

    }

    async getAll(data) {
        try {
            let projects = [];
            const querySnapshot = await getDocs(collection(db, "projects"));
            querySnapshot.forEach((doc) => {
                if (data === 'all') {
                    projects.push(doc.data())
                } else if (doc.data().tech === data) {
                    projects.push(doc.data())
                }
            });
            return projects.sort(compare);
        }
        catch (error) {
            console.log(error)
        }

    }

    async getLastThree() {

        const projectsRef = collection(db, "projects");

        try {
            let projects = [];
            const q = query(projectsRef, orderBy("createdAt", "desc"), limit(3));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                projects.push(doc.data())
            });
            return projects
        }
        catch (error) {
            console.log(error)
        }

    }

    async getTechnologies() {
        try {
            let technos = [];
            const querySnapshot = await getDocs(collection(db, "technologies"));
            querySnapshot.forEach((doc) => {
                technos.push(doc.data());
            });
            return technos.sort((a, b) => {
                return a.id - b.id;
            });
        }
        catch (error) {
            console.log(error)
        }

    }

}

export default new PortfolioService();

