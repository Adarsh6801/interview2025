export interface CV{
    cv_id:string;
    user_id:string;
    name:string;
    email:string;
    phone:string;
    summary:string;
    experience:WorkExperience[];
    education:Education[];
    skill:string[]
}

export interface WorkExperience{
    cv_id:string;
    company:string;
    role:string;
    start_date:string;
    end_date:string;
}

export interface Education{
    cv_id:string;
    institution:string;
    degree:string;
    year:string;
}