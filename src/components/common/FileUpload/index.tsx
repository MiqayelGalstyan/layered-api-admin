import React, { ChangeEvent, FC, useState } from 'react';
import { Button, Box, Typography, IconButton } from '@mui/material';
import { CloudUpload as CloudUploadIcon, Delete as DeleteIcon } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';


interface IFileUploadProps {
    onChange: (value: string | null) => void;
    width?: number;
    imagePath?: string;
}

const FileUpload: FC<IFileUploadProps> = ({ onChange, width = 300, imagePath = '' }) => {
    const [imagePreview, setImagePreview] = useState<string | null>(imagePath);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    setImagePreview(reader.result);
                    onChange(reader.result.split(",")[1]);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setImagePreview(null);
        onChange(null);
    };


    console.log(imagePath, 'imagePath')

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={2}
            border={1}
            sx={{ width: `${width}px`, height: `${width}px`, textAlign: 'center', borderColor: '#a9a9a954', borderRadius: '15px' }}
        >
            {imagePreview ? (
                <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <img
                        src={imagePreview}
                        alt="Preview"
                        style={{ height: '100%', width: '100%', objectFit: 'contain', borderRadius: '15px' }}
                    />
                    <IconButton
                        color="error"
                        onClick={handleRemoveImage}
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <Button
                        variant="contained"
                        component="label"
                        startIcon={<EditIcon color='success' />}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            padding: '10px 0',
                            minWidth: '30px',
                            right: 50,
                            width: '30px',
                            background: 'unset',
                            boxShadow: 'unset',
                            border: 'unset',
                            '&:hover': {
                                background: 'unset',
                                boxShadow: 'unset',
                                border: 'unset',
                            },
                            '& span': {
                                marginRight: 0,
                            }
                        }}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleFileChange}
                        />
                    </Button>
                </Box>
            ) : (
                <>
                    <Typography variant="body2" color="textSecondary">
                        No image selected
                    </Typography>
                    <Button
                        variant="contained"
                        component="label"
                        startIcon={<CloudUploadIcon />}
                        sx={{ mt: 2 }}
                    >
                        Upload
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleFileChange}
                        />
                    </Button>
                </>
            )}
        </Box>
    );
};

export default FileUpload;
