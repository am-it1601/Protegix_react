import { ROLE_TYPE } from '@/lib/constants';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';

const Dashboard = () => {
    return (
        <div>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Role Type" />
                </SelectTrigger>
                <SelectContent className="w-full rounded bg-primary-foreground">
                    {Object.entries(ROLE_TYPE).map((e, index) => (
                        <SelectItem key={index} value={e[0]} className="select-item">
                            {e[1]}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default Dashboard;
