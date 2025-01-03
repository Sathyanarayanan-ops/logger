import React from "react";
import { Typography, Box } from "@mui/material";

export default function SkillsSection() {
    return (
        <div>
            <Box>
                <Typography
                    variant="h4"
                    sx={{
                        color: 'black',
                        fontFamily: 'Roboto Mono, monospace',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    My Skills
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontFamily: 'Roboto Mono, monospace',
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        textAlign: 'center',
                        mb: 2,
                    }}
                >
                    Avid learner with strong skills in Software Development 
                    and integrating AI with Software Tools 
                </Typography>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: 4,
                        justifyItems: 'center',
                        alignItems: 'center',
                        mt: 4,
                    }}
                >
                    {/* Skill Icons with Captions */}
                    {[
                        { icon: "python", label: "Python" },
                        { icon: "java", label: "Java" },
                        { icon: "django", label: "Django" },
                        { icon: "fastapi", label: "FastAPI" },
                        { icon: "aws", label: "AWS" },
                        { icon: "ai", label: "AI" },
                        { icon: "javascript", label: "JavaScript" },
                        { icon: "nginx", label: "Nginx" },
                        { icon: "mysql", label: "MySQL" },
                        { icon: "mongodb", label: "MongoDB" },
                        { icon: "react", label: "React" },
                        { icon: "redis", label: "Redis" },
                        { icon: "postgres", label: "Postgres" },
                        { icon: "git", label: "Git" },
                        { icon: "postman", label: "Postman" },
                    ].map((skill) => (
                        <Box 
                            key={skill.label} 
                            sx={{ 
                                textAlign: 'center', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                alt={skill.label}
                                style={{ width: '50px', height: '50px' }}
                            />
                            <Typography
                                variant="caption"
                                sx={{
                                    fontFamily: 'Roboto Mono, monospace',
                                    fontSize: '0.75rem',
                                    color: 'gray',
                                    marginTop: '0.5rem', // Ensure proper spacing below icon
                                    textAlign: 'center',
                                }}
                            >
                                {skill.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                {/* Add the new section here */}
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontFamily: 'Roboto Mono, monospace',
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        textAlign: 'center',
                        mt: 4, // Space above this section
                    }}
                >
                    With more than a year of professional experience, I can seamlessly integrate AI with software engineering to create robust solutions. <br />
                    I hold deep knowledge and have a knack for building things from scratch with a focus on quality and efficiency.
                </Typography>
            </Box>
        </div>
    );
}
