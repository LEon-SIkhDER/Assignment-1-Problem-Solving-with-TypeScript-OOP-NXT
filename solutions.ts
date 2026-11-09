const multiplyValue = (value: number, multiplier?: number): number => {
    const defaultMultiplier = 2
    if (multiplier === undefined) return value * defaultMultiplier
    return value * multiplier
}
const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "boolean") {
        return value ? "Active" : "Inactive"
    }
    if (typeof value === "number") {
        return value * 10
    }
    return value.trim().toLowerCase()
}
const formatCoordinate = (value: readonly [number, number, string]): string => {
    return `Location: ${value[2]} (${value[0]}, ${value[1]})`
}
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    let temp: T[] = []
    for (let value of arrays) {
        temp = [...temp, ...value]
    }
    return temp
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean
}
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents)
}
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map(user => user[key])
}
class Employee {
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails():string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo():string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        } else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });
};
