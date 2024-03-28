import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { PERMISSION_SCOPE, USER_ROLE_TYPE } from '@/constants/enums';
import { UserRoleFormData, UserRoleSchema } from '@/lib/zod/UserRoleSchema';
import { useAddOrUpdateUserRole } from '@/services';
import { useAcl } from '@/services/query/acl.query';
import { WRITE_MODE } from '@/types/app';
import { zodResolver } from '@hookform/resolvers/zod';

export const useUserRoleForm = ({type}: {type: WRITE_MODE}) => {
    const initialValue: UserRoleFormData = { name: '', roleType: USER_ROLE_TYPE.COMPANY_USER, companyId: '65e2fd77518effe02e3c2cbd', 
    permissions : []
};

const getScope = () => {
            if(watchRoleDropdown === 'COMPANY_ADMIN')
                return PERMISSION_SCOPE.COMPANY
            else
                return PERMISSION_SCOPE.USER;
        }

    // TODO : Move the Form operation to userUserRoleFormHook
    const form = useForm<UserRoleFormData>({
        resolver: zodResolver(UserRoleSchema),
        defaultValues: { ...initialValue },
    });

    const watchRoleDropdown = form.watch('roleType');

   
    
    const { isPending, mutate } = useAddOrUpdateUserRole({
        type
    });
    
    const {data:aclData, isError:isAclError, } = useAcl(getScope());

     useEffect(() => {
        
        form.resetField('permissions');
        
       
    }, [watchRoleDropdown])

    const submitForm = (formData: UserRoleFormData) => {
        console.log(formData, form.formState.errors);
        mutate(formData);
    };

    

    return {
        submitForm,
        form,
        isPending,
        permissionData : aclData,
        isAclError 
    }

}